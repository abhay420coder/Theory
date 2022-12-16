// ops2 => 77 ( django + ui ) , DB : 73 
// ops1 => 73 (  django ) , UI , 24 , DB : 24

const baseUrl = '192.168.1.77:2600';
const wsBaseUrl = 'devops2.pushcord.com:8444';
const devopsHelperApiUrl = 'http://192.168.1.24:8236'
const baseSts = 'https://devops.pushcord.com';
const dbMonitoringHost = "http://192.168.1.21:2601";
const nsLogsBaseUrl = "http://192.168.1.37:8999"

export const environment = {
  production: false,
  baseUrl: `http://${baseUrl}/devops/secure`,
  sts: baseSts + '/devops-sts',
  vcaIdentityUrl: devopsHelperApiUrl + '/devops-identity/api/v1.0/ui',
  websocketBaseUrl: `wss://${wsBaseUrl}`,
  dbMonitoringHost: dbMonitoringHost,
  nsLogsBaseUrl: nsLogsBaseUrl
};

