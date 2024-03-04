import CUSTOMAXIOS from "./customaxios";
import queryString from 'query-string';
const BASE_URL = "https://143489-crm-bundle.creatio.com";

export const fetchTickets = async () => {
  try {
    //console.log(loginResponse, "login response");
    const payload = {
      UserName: "Supervisor",
      UserPassword: "Psiog@123",
    };
    const payload2 = {
      'client_id':'6E92FB07AFECA0232461660B885F6F89',
      'client_secret':'B73F3EE5649707E1A97CD14CCD6B96B8D5B06579FCB963B835DF9AADB6C8335A',
      'grant_type':'client_credentials'
    }
    const loginUrl = `${BASE_URL}/ServiceModel/AuthService.svc/Login`;
    const oauth2Url = 'https://143489-crm-bundle-is.creatio.com/connect/token';
    //  console.log(loginUrl, "loginurl");
    await CUSTOMAXIOS.post(oauth2Url,queryString.stringify(payload2) ).then(
      (response) => {

        console.log(response, "login response");
        // const cookies = response.headers['set-cookie'];
        // console.log(cookies,"cookies");
      }
    );
    // const loginResponse = await fetch(`${BASE_URL}/ServiceModel/AuthService.svc/Login`, {
    //   method: "POST",
    //   headers: {
    //     "Content-type": "application/json; charset=utf-8",
    //     "Accept": "application/json",
    //     "ForceUseSession": "true",
    //   },
    //   body: JSON.stringify(payload),
    // });
    // console.log(loginResponse, "loginResponse");
    // if (!loginResponse.ok) {
    //   throw new Error("Failed to login");
    // } else {

    //   console.log(loginResponse.headers.get('Set-Cookie'),"cookies");
    // }
    // const response = await fetch(`${BASE_URL}/0/odata/contact`);
    // console.log(response, "response");
    // if (!response.ok) {
    //   throw new Error("Failed to fetch products");
    // }
    // const products = await response.json();
    // return products;
    // return ["hii", "hello"];
  } catch (error) {
    console.error("Error fetching products:", error.message);
    return []; // Return an empty array in case of an error
  }
};
