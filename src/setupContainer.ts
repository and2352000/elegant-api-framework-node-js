import setupRepoContainer from './repository/setupContainer';
import setupServiceContainer from './service/setupContainer';

export default function setupContainer() {
    setupRepoContainer();
    setupServiceContainer();
}