import { GetCurrentLoginInformations } from './dto/getCurrentLoginInformations';
import http from '../httpService';

declare var abp: any;

class SessionService {
  public async getCurrentLoginInformations(): Promise<GetCurrentLoginInformations> {
    let result = await http.get('api/services/app/Session/GetCurrentLoginInformations');
    if (result.data.result.user) {
      localStorage.setItem('name', result.data.result.user.name + ' ' + result.data.result.user.surname);
    }
    return result.data.result;
  }
}

export default new SessionService();
