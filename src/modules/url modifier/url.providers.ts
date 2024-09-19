import { UrlModel } from '../../models';
import { URLS} from '../../config/constants';

export const urlProviders = [{
    provide: URLS,
    useValue: UrlModel,
}


];