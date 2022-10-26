import axios, {AxiosRequestConfig} from 'axios';

class ApiTelegramService {
  public static sendRepoToTelegram(
    url: string,
    data?: any,
    config?: AxiosRequestConfig,
  ) {
    axios
      .post(url, data, config)
      .then(result => {
        console.log(result);
      })
      .catch(err => {
        console.error(err);
      });
  }
}

export default ApiTelegramService;
