https://api-test.instarem.com:4803/api/v1/client/{clientId}/virtualReceivingAccount/autoAllocation
Example Request

curl --request post \
--url "https://api-test.instarem.com:4803/api/v1/client/{clientId}/virtualReceivingAccount/autoAllocation" \
--data {
    "currencyCode": "USD",
    "vraApproach": "\"PER_CURRENCY\""
}
--header 'authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE0OTgxMzQ4OTQsImRhdGEiOnsic3ViIjoiNTk0MjNmMzZjZWEyMTQ2OTI2ODczOWE1IiwiY2xpZW50IjoiNTk0MjNmMzZjZWEyMTQ2OTI2ODczOWExIn0sImlhdCI6MTQ5ODA0ODQ5NH0.pevwSDpk-JDNtVIpqFu_m0Xu1UnDVumrAYStcrxf8sM' \
Example Response

{
    "virtualReceivingAccountId": "1b1542f8-c5b2-484d-b0c4-c78710dd84a3",
    "virtualReceivingAccount": "9675538220127460",
    "bankAccountName": "Nium India",
    "bankName": "DBS Hong Kong",
    "bankAddress": "Hong Kong",
    "bankRoutingDetails": {
        "routing_code_1": "IFSC CODE",
        "routing_value_1": "SBIN0000058",
        "routing_code_2": "IFSC CODE",
        "routing_value_2": "259087"
    }
}
