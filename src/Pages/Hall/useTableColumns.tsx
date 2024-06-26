
import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";
import Actions from "../../Components/Ui/tables/Actions";
import { mapTranslatedProperties } from "../../utils/language/mapTranslatedProperties";
import { useDeleteHall } from "../../api/Hall";


const useTableColumns: any = () => {
  const [t] = useTranslation();


  const deleteMutation = useDeleteHall()

  return useMemo(

    () => [
      {
        name: `${t("Name Of Hall")}`,
        sortable: false,
        center: true,
        cell: (row: any) =>row?.["Name Of Hall"],
      },
      {
        name: `${t("Capacity")}`,
        sortable: false,
        center: true,
        cell: (row: any) =>row?.["Capacity"],
      },
      {
        name: `${t("Hall Location")}`,
        sortable: false,
        center: true,
        cell: (row: any) =>row?.["Hall Location"],
      },
      {
        name: `${t("name")}`,
        sortable: false,
        center: true,
        cell: (row: any) =>row?.["Name Of Hall"],
      },
      {
        name: `${t("Rental Cost")}`,
        sortable: false,
        center: true,
        cell: (row: any) =>row?.["Rental Cost"],
      },
      

      {
        name: "#",
        sortable: false,
        center: true,
        cell: (row) => (
          <Actions
            objectToEdit={row}
            showView={false}
            onDelete={() => deleteMutation.mutate({ id: row.id })}
          />
        ),
      },
    ],
    [t, deleteMutation]
  );
};

export default useTableColumns;

