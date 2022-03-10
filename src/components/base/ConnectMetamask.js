import { ethers, BigNumber } from "ethers"
import { Button } from "@nextui-org/react"
import { useState } from "react";
import { Text } from "@nextui-org/react";
import swal from "sweetalert";

const ConnectMetamask = () => {
    const [accounts, setAccounts] = useState([])
    const [btnAddress, setBtnAddress] = useState("Connect")
    const [isConnected, setIsConnected] = useState(false)
    const [accBalance, setAccBalance] = useState()
  
    async function connectToMetamask() {
        if (window.ethereum) {
            const provider = new ethers.providers.Web3Provider(window.ethereum)
            await provider.send("eth_requestAccounts", [])
            const signer = provider.getSigner()
            const addressOfAccount = await signer.getAddress()
            const balanceOfAddress = await provider.getBalance(addressOfAccount)
            const balanceOfAddressLast =
              parseInt(balanceOfAddress._hex.toString(16), 16) / 10 ** 18
            setIsConnected(true);
            setBtnAddress(addressOfAccount);
            setAccBalance(balanceOfAddressLast);
        }  else {
            swal("Please install Metamask");
          }
    }
    return (
        <div>
            <Button onClick={connectToMetamask}>
                {isConnected ? (
                <Text>
                    {btnAddress.slice(0, 8) + "...  "}[{accBalance} ETH]
                </Text>
                ) : (
                "Connect"
                )}
            </Button>        
        </div>
    );
}

export default ConnectMetamask
