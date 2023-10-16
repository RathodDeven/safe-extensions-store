// SPDX-License-Identifier: LGPL-3.0-only
pragma solidity ^0.8.18;
import {ISafe} from "./interfaces/Accounts.sol";
import {ISafeProtocolManager} from "./interfaces/Manager.sol";
import {SafeTransaction, SafeProtocolAction} from "./DataTypes.sol";
import {BasePluginWithEventMetadata, PluginMetadata} from "./Base.sol";

/**
 * @title OwnerManager
 * @dev This interface is defined for use in WhitelistPlugin contract.
 */
interface OwnerManager {
    function isOwner(address owner) external view returns (bool);
}

/**
 * @title WhitelistPlugin maintains a mapping that stores information about accounts that are
 *        permitted to execute non-root transactions through a Safe account.
 * @notice This plugin does not need Safe owner(s) confirmation(s) to execute Safe txs once enabled
 *         through a Safe{Core} Protocol Manager.
 */
contract WhitelistPlugin is BasePluginWithEventMetadata {
    // safe account => account => whitelist status
    mapping(address => mapping(address => bool)) public whitelistedAddresses;

    event AddressWhitelisted(address indexed account);
    event AddressRemovedFromWhitelist(address indexed account);

    error AddressNotWhiteListed(address account);
    error CallerIsNotOwner(address safe, address caller);

    constructor(
        string memory name,
        string memory version,
        uint8 requiredPermissions,
        string memory iconUrl,
        string memory appUrl,
        string memory description,
        string memory category,
        string[] memory ssUrls
    ) BasePluginWithEventMetadata(PluginMetadata(name, version, requiredPermissions, iconUrl, appUrl, description, category, ssUrls)) {}

    /**
     * @notice Executes a Safe transaction if the caller is whitelisted for the given Safe account.
     * @param manager Address of the Safe{Core} Protocol Manager.
     * @param safe Safe account
     * @param safetx SafeTransaction to be executed
     */
    function executeFromPlugin(
        ISafeProtocolManager manager,
        ISafe safe,
        SafeTransaction calldata safetx
    ) external returns (bytes[] memory data) {
        address safeAddress = address(safe);
        // Only Safe owners are allowed to execute transactions to whitelisted accounts.
        if (!(OwnerManager(safeAddress).isOwner(msg.sender))) {
            revert CallerIsNotOwner(safeAddress, msg.sender);
        }

        SafeProtocolAction[] memory actions = safetx.actions;
        uint256 length = actions.length;
        for (uint256 i = 0; i < length; i++) {
            if (!whitelistedAddresses[safeAddress][actions[i].to]) revert AddressNotWhiteListed(actions[i].to);
        }
        // Test: Any tx that updates whitelist of this contract should be blocked
        (data) = manager.executeTransaction(safeAddress, safetx);
    }

    /**
     * @notice Adds an account to whitelist mapping.
     *         The caller should be a Safe account.
     * @param account address of the account to be whitelisted
     */
    function addToWhitelist(address account) external {
        whitelistedAddresses[msg.sender][account] = true;
        emit AddressWhitelisted(account);
    }

    /**
     * @notice Removes an account from whitelist mapping.
     *         The caller should be a Safe account.
     * @param account address of the account to be removed from the whitelist
     */
    function removeFromWhitelist(address account) external {
        whitelistedAddresses[msg.sender][account] = false;
        emit AddressRemovedFromWhitelist(account);
    }

    // function requiresPermissions() external view returns (uint8 permissions) {
    //     // 3 - EXECUTE_CALL + CALL_TO_SELF
    //     // Return the required permissions for the plugin
    //     return 3; // Assuming no permissions are required
    // }
}
