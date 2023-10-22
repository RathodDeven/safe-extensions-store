import {
  GelatoRelay,
  SponsoredCallRequest,
  TransactionStatusResponse,
} from "@gelatonetwork/relay-sdk";
const relay = new GelatoRelay();

export const sponsoredCall = async (
  request: SponsoredCallRequest
): Promise<TransactionStatusResponse> => {
  const relayResponse = await relay.sponsoredCall(
    request,
    String(process.env.REACT_APP_GELATO_API_KEY)
  );

  const status = await pollingGelatoTask(relayResponse.taskId);

  return status;
};

// export const sponsoredCallFromSafe = async (txs: MetaTransactionData[]) => {
//   if (!isConnectedToSafe()) return;

//   const signer = await getConnectedSigner();

//   const safeAddress = await signer?.getAddress();

//   const ethAdapter = new EthersAdapter({
//     ethers,
//     signerOrProvider: signer!,
//   });

//   const safeSDK = await Safe.create({
//     ethAdapter,
//     safeAddress: safeAddress!,
//   });

//   const safeTransaction = await relayKit.createRelayedTransaction({
//     // @ts-ignore
//     safe: safeSDK,
//     transactions: txs,
//     options: {
//       isSponsored: true,
//     },
//   });

//   const signedSafeTransaction = await safeSDK.signTransaction(safeTransaction);

//   const response = await relayKit.executeRelayTransaction(
//     signedSafeTransaction,
//     safeSDK,
//     {
//       isSponsored: true,
//     }
//   );

//   console.log("response", response);

//   // polling

//   const status = await pollingGelatoTask(response.taskId);

//   console.log({ status });

//   return status;
// };

export const pollingGelatoTask = async (
  taskId: string
): Promise<TransactionStatusResponse> => {
  return new Promise((resolve, reject) => {
    const interval = setInterval(async () => {
      try {
        const status = await relay.getTaskStatus(taskId);
        console.log({ status });

        if (status?.taskState === "ExecReverted") {
          clearInterval(interval);
          reject(status);
        }

        if (status?.taskState === "Cancelled") {
          clearInterval(interval);
          reject(status);
        }

        if (status?.taskState === "ExecSuccess") {
          clearInterval(interval);
          resolve(status);
        }
      } catch (error) {
        clearInterval(interval);
        reject(error);
      }
    }, 1000);
  });
};
