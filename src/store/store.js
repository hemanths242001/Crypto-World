import { SelectedCurrencyProvider } from "./selectedCurrencyContext";
import { CurrencyListProvider } from "./currencyListContext";

const Store = (props) => {
    return(
        <CurrencyListProvider>
            <SelectedCurrencyProvider>
                {props.children}
            </SelectedCurrencyProvider>
        </CurrencyListProvider>
    );
};

export default Store;