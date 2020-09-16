import {getElementAndClick, getElementAndExpectToBe, logMessage} from "../commons";
import {skipIfFails} from "varmon-jest";
import DIGITS from "../commons/numbers";
import OPERATORS from "../commons/operators";

const INPUT = "id:com.google.android.calculator:id/result_final";

const TIMEOUT = 1250;

export const clearStep = async () => {

  skipIfFails();

  logMessage("Click at del operator");
  await getElementAndClick(OPERATORS.DEL, TIMEOUT);

}


