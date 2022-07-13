
export const clientid = "vp_89IUVJd7CD_GueiD8hKiP";
export const clientsecret = "0trKB8Eswff9ijgqyez7CLpQV7Bry8DO";
export const snipcart_API =
  "ZWVjM2Q2N2MtMDlhNi00YzU2LWFhYTctNDgxYTliOGE5NTc1NjM3NjExNDMxMDA2MDY3NDMx";
export const ORG_ID = "1409G6";
export const algoliaindex = "sneakerhead";


function Welcome() {
  return <h1>Hello</h1>;
}

export default Welcome;

export function generateHexString(length) {
  var ret = "";
  while (ret.length < length) {
    ret += Math.random().toString(16).substring(2);
  }
  return ret.substring(0, length);
}