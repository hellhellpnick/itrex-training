import { FunctionComponent, useEffect, useMemo } from 'react';
import { useTable } from 'react-table';
import {
  StylBoxDoctor,
  StylBoxBtnPatients,
  BtnPatientsHiddenMob,
  BoxSearch,
  BtnPatients,
  BoxFilter,
  StylBoxPatientContent,
  StylBoxRowPadding,
  StylTitlePatients,
  StylTable,
  StylTableHead,
  StylTableHeadRow,
  StylTableHeaderColumn,
  StylTableRow,
  StylTableCell,
  StyledArrow,
  StylBtnMore,
} from './../';
import moment from 'moment';
import arrowDownSvg from './../../assets/icons/icon-arrow-down.svg';
import useActionsWithRedux from '../../hooks/useActionsWithRedux';
import { resolutionTableColumns } from './resolutionTableSchema';
import { routes } from '../../Router';
import { IPatientResolutions } from '../../modules/CardPatientProfile.model';

const UserResolutionList: FunctionComponent = () => {
  const { getResolutionsPatientHandler, resolutionsPatient } =
    useActionsWithRedux();
  useEffect(() => {
    getResolutionsPatientHandler();
  }, [getResolutionsPatientHandler]);

  const columns = useMemo(() => resolutionTableColumns, []);
  const data = resolutionsPatient.map((resolution: IPatientResolutions) => ({
    col1: resolution.doctor.first_name,
    col2: resolution.doctor.last_name,
    col3: resolution.resolution,
    col4: moment(resolution.visit_date).format('l'),
    col5: moment(resolution.next_appointment_date).format('l'),
    col6: <StylBtnMore />,
  }));
  const { headerGroups, getTableBodyProps, rows, prepareRow } = useTable<any>({
    columns,
    data,
  });
  return (
    <>
      <StylBoxPatientContent>
        <StylBoxBtnPatients>
          <BtnPatients text='Profile' path={routes.profile} />
          <BtnPatients text='Appointments ' path={routes.patientProfile} />
          <BtnPatientsHiddenMob
            text='Resolutions  '
            path={routes.patientResolution}
          />
        </StylBoxBtnPatients>
        <StylBoxRowPadding>
          <StylTitlePatients>My patients</StylTitlePatients>
          <StylBoxDoctor>
            <BoxSearch />
            <BoxFilter text='Sort by:' filter='Date' />
          </StylBoxDoctor>
        </StylBoxRowPadding>

        <StylTable>
          <StylTableHead>
            {headerGroups.map((headerGroup) => (
              <StylTableHeadRow {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column: any) => (
                  <StylTableHeaderColumn {...column.getHeaderProps()}>
                    {column.render('Header')}
                    <StyledArrow src={arrowDownSvg} />
                  </StylTableHeaderColumn>
                ))}
              </StylTableHeadRow>
            ))}
          </StylTableHead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row: any) => {
              prepareRow(row);
              return (
                <StylTableRow {...row.getRowProps()}>
                  {row.cells.map((cell: any) => (
                    <StylTableCell {...cell.getCellProps()}>
                      {cell.render('Cell')}
                    </StylTableCell>
                  ))}
                </StylTableRow>
              );
            })}
          </tbody>
        </StylTable>
      </StylBoxPatientContent>
    </>
  );
};

export default UserResolutionList;
