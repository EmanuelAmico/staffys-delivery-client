"use client";
import React, { useCallback, useContext, useEffect } from "react";
import IconButton from "@/commons/IconButton";
import Card from "@/commons/Card";
import PackageDescription from "@/commons/PackageDescription";
import Layout from "@/commons/Layout";
import { RiArrowLeftSLine } from "react-icons/ri";
import { useRouter, useParams } from "next/navigation";
import { CheckRefreshContext } from "@/context/refresh";
import { useDispatch, useSelector } from "react-redux";
import { fetchPackageById } from "@/redux/reducers/selectedPackage";
import { AppDispatch, RootState } from "@/redux/store";
const SinglePackageDescription = () => {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const { isRefreshed } = useContext(CheckRefreshContext);
  const { _id } = useParams();
  const selectedPackage = useSelector(
    (state: RootState) => state.selectedPackage
  );
  const getPackageById = useCallback(async () => {
    await dispatch(fetchPackageById(_id)).unwrap();
  }, [dispatch, _id]);

  useEffect(() => {
    getPackageById();
  }, [getPackageById]);

  return (
    <Layout className="items-center">
      <IconButton
        onClick={() => (isRefreshed ? router.push("/home") : router.back())}
        icon={<RiArrowLeftSLine size={40} />}
        className="self-start"
      />
      <Card
        className="w-11/12"
        title={
          selectedPackage?.status === "taken"
            ? "Detalle del reparto"
            : "Reparto finalizado"
        }
      >
        <PackageDescription
          className="pt-6"
          destination={selectedPackage?.address}
          packageId="712"
          recipient={selectedPackage?.receptorName}
          coordinatesPackage={selectedPackage?.coordinatesPackage}
          coordinatesUser={selectedPackage?.coordinatesUser}
        />
      </Card>
    </Layout>
  );
};

export default SinglePackageDescription;
