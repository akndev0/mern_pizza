const baseUrl = "https://mernpizzadevelopmentapp.herokuapp.com";
const baseUrl2 = "http://localhost:2000";


export const api = `${baseUrl2}/api`;
export const generatePublicUrl = (fileName) => {
  return `${baseUrl}/public/${fileName}`;
};