//loader
import { Loader, StylBoxCenterSpiner, StylSpiner } from './Loader';

//forms
import { FormRestorePassword, FormSignIn, FormSignUp } from './Forms';

//card patient profile doctor
import {
  CardPatientProfile,
  CardDoctorProfile,
  StylBoxCardPatient,
  StylBoxColumnInfo,
  StylBoxImgPatient,
  StylBoxRowLine,
  StylSubTitleCard,
  StylTitleCard,
  StylBoxMenuCard,
  StylBtnChooseAction,
} from './CardPatientProfile';

//form form input
import {
  BtnEyePassword,
  FormInput,
  LabelFromInput,
  StylBtnEyePasswordStyle,
  StylIconInputEnd,
  StylInputForm,
  StylWrapperFormInput,
  StylIconInputStart,
  StylLabelFromInput,
} from './Forms/FormInput';

//mainPatientsAppointemt
import { MainPatientsAppointment } from './MainPatientsAppointment';

//btns component
import {
  BtnCreateAppointment,
  BtnMore,
  BtnPatients,
  BtnPatientsHiddenMob,
  BtnSubmitForm,
} from './BtnsComponents';

//boxes
import {
  BoxContentLink,
  BoxDataPatient,
  BoxFilter,
  BoxInfoPatient,
  BoxSearch,
} from './Boxes';

//header profile
import {
  HeaderProfile,
  StylTitleName,
  StylSubTitlePosition,
  AvatarActive,
  StylAvatarActive,
  StylAvatarImg,
  StylLogo,
} from './HeaderProfile';

//create appointment
import {
  CreateAppointment,
  StylArrowVisitDoctor,
  StylBoxChooseTime,
  StylBoxColumnFlexMargin,
  StylBoxMenuSelectVisitDoctor,
  StylBtnChooseTimeVisitDoctor,
  StylChooseDateAndTimeVisitDoctor,
  StylElementSelectVisitDoctor,
  StylItemChooseDoctor,
  StylBtnSubmitFormVisitDoctor,
  StylInputVisitDoctor,
  StylOptionVisitDoctor,
  StylTitleVisitDoctor,
  HeaderCreateAppointment,
  InputsAppointment,
} from './CreateAppointment';

//resolution patient
import {
  StylBoxCenterResolutionForm,
  StylTitleResolutionForm,
  StylNamePersonResolutionForm,
  StylTitleTextArea,
  StylTextAreaResolution,
  StylRowFormBtns,
  StylBtnCloseForm,
  StylBtnActionForm,
  ResolutionPatient,
} from './ResolutionPatient';

//common boxes
import {
  StylBoxBtnPatients,
  StylBoxColumn,
  StylBoxDoctor,
  StylBoxFlexColumn,
  StylBoxForm,
  StylBoxFormSignIn,
  StylBoxImgInfo,
  StylBoxPatientContent,
  StylBoxPatients,
  StylBoxPatientsList,
  StylBoxRow,
  StylBoxRowMargin,
  StylBoxRowPadding,
  StylBoxSelect,
  StylBoxViewContent,
  StylBoxRowFlexStart,
  StylBoxColumnFlex,
  StylBoxMain,
} from './common/Boxes';

//common btns
import {
  StylBtnFilter,
  StylBtnForm,
  StylBtnMore,
  StylBtnSearch,
} from './common/Btns';

//commont parts of the form
import {
  TitleFormArrow,
  InformationTextForm,
  LinkPage,
  StylArrowFromForm,
  StylFormSign,
  StylInputSearchPatient,
  StylElementSelect,
  StylFilterTypePatient,
  StylInformationText,
  StylLinkPage,
} from './common/partsOfTheForm';

//common text
import {
  StylTextContent,
  StylTextData,
  StylTextFilterPatient,
  StylTextInfo,
} from './common/Text';

//commont title
import {
  StylTitleForm,
  StylTitlePatients,
  StylTitleCurrentPatientAppointment,
  StylTitlePatientAppointment,
} from './common/Titles';

//common calendar visit doctor
import {
  CalendarVisitDoctor,
  StylBtnVisitDoctor,
  StylDayVisitDoctor,
  StylBoxCalendar,
  StylDayWeekVisitDoctor,
  StylHeaderCalendarVisitDoctor,
  StylBodyCalendarVisitDoctor,
} from './CalendarVisitDoctor';

//not found
import { StylBoxCenter, StylImgNotFound, StylTitleNotFound } from './NotFound';

//user resolution
import {
  StylTable,
  StylTableHead,
  StylTableHeadRow,
  StylTableHeaderColumn,
  StylTableRow,
  StylTableCell,
  StyledArrow,
  UserResolutionList,
} from './UserResolutionList';

export {
  StylTable,
  StylTableHead,
  StylTableHeadRow,
  StylTableHeaderColumn,
  StylTableRow,
  StylTableCell,
  StyledArrow,
  UserResolutionList,
  StylBoxCenter,
  StylImgNotFound,
  StylTitleNotFound,
  StylBoxCenterResolutionForm,
  StylTitleResolutionForm,
  StylNamePersonResolutionForm,
  StylTitleTextArea,
  StylTextAreaResolution,
  StylRowFormBtns,
  StylBtnCloseForm,
  StylBtnActionForm,
  ResolutionPatient,
  StylBtnChooseAction,
  StylBoxMenuCard,
  StylBoxMain,
  StylLogo,
  InputsAppointment,
  HeaderCreateAppointment,
  CreateAppointment,
  MainPatientsAppointment,
  StylAvatarImg,
  HeaderProfile,
  StylBtnSubmitFormVisitDoctor,
  StylBoxChooseTime,
  StylBtnChooseTimeVisitDoctor,
  CalendarVisitDoctor,
  StylBtnVisitDoctor,
  StylDayVisitDoctor,
  StylBoxCalendar,
  StylDayWeekVisitDoctor,
  StylHeaderCalendarVisitDoctor,
  StylBodyCalendarVisitDoctor,
  StylSubTitlePosition,
  StylTitleForm,
  StylTitleName,
  StylTitlePatients,
  StylAvatarActive,
  StylElementSelect,
  StylFilterTypePatient,
  StylInformationText,
  StylLinkPage,
  StylWrapperFormInput,
  StylTextContent,
  StylTextData,
  StylTextFilterPatient,
  StylTextInfo,
  StylArrowFromForm,
  StylFormSign,
  StylInputForm,
  StylInputSearchPatient,
  StylLabelFromInput,
  StylIconInputEnd,
  StylIconInputStart,
  StylBtnEyePasswordStyle,
  StylBtnFilter,
  StylBtnForm,
  StylBtnMore,
  StylBtnSearch,
  StylBoxBtnPatients,
  StylBoxColumn,
  StylBoxDoctor,
  StylBoxFlexColumn,
  StylBoxForm,
  StylBoxFormSignIn,
  StylBoxImgInfo,
  StylBoxPatientContent,
  StylBoxPatients,
  StylBoxPatientsList,
  StylBoxRow,
  StylBoxRowMargin,
  StylBoxRowPadding,
  StylBoxSelect,
  StylBoxViewContent,
  BoxContentLink,
  BoxDataPatient,
  BoxFilter,
  BoxInfoPatient,
  BoxSearch,
  BtnCreateAppointment,
  BtnEyePassword,
  BtnMore,
  BtnPatients,
  BtnPatientsHiddenMob,
  BtnSubmitForm,
  CardPatientProfile,
  StylBoxCardPatient,
  CardDoctorProfile,
  StylBoxColumnInfo,
  StylBoxImgPatient,
  StylBoxRowLine,
  StylSubTitleCard,
  StylTitleCard,
  FormRestorePassword,
  FormSignIn,
  FormSignUp,
  Loader,
  StylBoxCenterSpiner,
  StylSpiner,
  AvatarActive,
  FormInput,
  InformationTextForm,
  LabelFromInput,
  LinkPage,
  TitleFormArrow,
  StylTitleCurrentPatientAppointment,
  StylTitlePatientAppointment,
  StylBoxRowFlexStart,
  StylChooseDateAndTimeVisitDoctor,
  StylItemChooseDoctor,
  StylBoxColumnFlex,
  StylInputVisitDoctor,
  StylOptionVisitDoctor,
  StylTitleVisitDoctor,
  StylArrowVisitDoctor,
  StylBoxMenuSelectVisitDoctor,
  StylElementSelectVisitDoctor,
  StylBoxColumnFlexMargin,
};
