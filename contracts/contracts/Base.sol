// SPDX-License-Identifier: LGPL-3.0-only
pragma solidity ^0.8.18;

import {ISafeProtocolPlugin} from "./interfaces/Modules.sol";
import {IERC165} from "@openzeppelin/contracts/utils/introspection/IERC165.sol";

enum MetadataProviderType {
    IPFS,
    URL,
    Contract,
    Event
}

interface IMetadataProvider {
    function retrieveMetadata(bytes32 metadataHash) external view returns (bytes memory metadata);
}

struct PluginMetadata {
    string name;
    string version;
    uint8 requiresPermissions;
    string iconUrl;
    string appUrl;
    string description;
    string category;
    string[] ssUrls;
}

library PluginMetadataOps {
    function encode(PluginMetadata memory data) internal pure returns (bytes memory) {
        return
            abi.encodePacked(
                uint8(0x00), // Format
                uint8(0x00), // Format version
                abi.encode(
                    data.name,
                    data.version,
                    data.requiresPermissions,
                    data.iconUrl,
                    data.appUrl,
                    data.description,
                    data.category,
                    data.ssUrls
                ) // Plugin Metadata
            );
    }

    function decode(bytes calldata data) internal pure returns (PluginMetadata memory) {
        require(bytes16(data[0:2]) == bytes16(0x0000), "Unsupported format or format version");
        (
            string memory name,
            string memory version,
            uint8 requiresPermissions,
            string memory iconUrl,
            string memory appUrl,
            string memory description,
            string memory category,
            string[] memory ssUrls
        ) = abi.decode(data[2:], (string, string, uint8, string, string, string, string, string[]));
        return PluginMetadata(name, version, requiresPermissions, iconUrl, appUrl, description, category, ssUrls);
    }
}

abstract contract BasePlugin is ISafeProtocolPlugin {
    using PluginMetadataOps for PluginMetadata;

    string public name;
    string public version;
    uint8 public immutable requiresPermissions;
    bytes32 public immutable metadataHash;

    constructor(PluginMetadata memory metadata) {
        name = metadata.name;
        version = metadata.version;
        requiresPermissions = metadata.requiresPermissions;
        metadataHash = keccak256(metadata.encode());
    }

    function supportsInterface(bytes4 interfaceId) external pure override returns (bool) {
        return interfaceId == type(ISafeProtocolPlugin).interfaceId || interfaceId == type(IERC165).interfaceId;
    }
}

abstract contract BasePluginWithStoredMetadata is BasePlugin, IMetadataProvider {
    using PluginMetadataOps for PluginMetadata;

    bytes private encodedMetadata;

    constructor(PluginMetadata memory metadata) BasePlugin(metadata) {
        encodedMetadata = metadata.encode();
    }

    function retrieveMetadata(bytes32 _metadataHash) external view override returns (bytes memory metadata) {
        require(metadataHash == _metadataHash, "Cannot retrieve metadata");
        return encodedMetadata;
    }

    function metadataProvider() public view override returns (uint256 providerType, bytes memory location) {
        providerType = uint256(MetadataProviderType.Contract);
        location = abi.encode(address(this));
    }
}

abstract contract BasePluginWithEventMetadata is BasePlugin {
    using PluginMetadataOps for PluginMetadata;

    event Metadata(bytes32 indexed metadataHash, bytes data);

    constructor(PluginMetadata memory metadata) BasePlugin(metadata) {
        emit Metadata(metadataHash, metadata.encode());
    }

    function metadataProvider() public view override returns (uint256 providerType, bytes memory location) {
        providerType = uint256(MetadataProviderType.Event);
        location = abi.encode(address(this));
    }
}
