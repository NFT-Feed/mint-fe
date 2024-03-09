/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface PresaleFairLaunchFactoryV1Interface extends ethers.utils.Interface {
  functions: {
    "MAX_PERCENT_FEE_SYSTEM()": FunctionFragment;
    "ONE_HUNDRED_PERCENT()": FunctionFragment;
    "admins(address)": FunctionFragment;
    "calculateTokensForLiquidity(uint256,uint256)": FunctionFragment;
    "changeCreationFee(uint256)": FunctionFragment;
    "changePercentFeeRaised(uint256)": FunctionFragment;
    "changePercentRefund(uint256)": FunctionFragment;
    "changeRoyaltyAddress(address)": FunctionFragment;
    "containerPools(uint256)": FunctionFragment;
    "creationFee()": FunctionFragment;
    "deploy(address,uint256,uint256,uint256,uint256,uint256,uint256,address)": FunctionFragment;
    "dexRouters(address)": FunctionFragment;
    "owner()": FunctionFragment;
    "percentFeeRaised()": FunctionFragment;
    "percentRefund()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "royaltyAddress()": FunctionFragment;
    "tokens(address)": FunctionFragment;
    "totalPool()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "updateAdmin(address,bool)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "MAX_PERCENT_FEE_SYSTEM",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "ONE_HUNDRED_PERCENT",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "admins", values: [string]): string;
  encodeFunctionData(
    functionFragment: "calculateTokensForLiquidity",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "changeCreationFee",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "changePercentFeeRaised",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "changePercentRefund",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "changeRoyaltyAddress",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "containerPools",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "creationFee",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "deploy",
    values: [
      string,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      string
    ]
  ): string;
  encodeFunctionData(functionFragment: "dexRouters", values: [string]): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "percentFeeRaised",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "percentRefund",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "royaltyAddress",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "tokens", values: [string]): string;
  encodeFunctionData(functionFragment: "totalPool", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "updateAdmin",
    values: [string, boolean]
  ): string;

  decodeFunctionResult(
    functionFragment: "MAX_PERCENT_FEE_SYSTEM",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "ONE_HUNDRED_PERCENT",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "admins", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "calculateTokensForLiquidity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "changeCreationFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "changePercentFeeRaised",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "changePercentRefund",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "changeRoyaltyAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "containerPools",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "creationFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "deploy", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "dexRouters", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "percentFeeRaised",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "percentRefund",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "royaltyAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "tokens", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "totalPool", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateAdmin",
    data: BytesLike
  ): Result;

  events: {
    "DeployPool(uint256,address,address)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "DeployPool"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

export type DeployPoolEvent = TypedEvent<
  [BigNumber, string, string] & {
    poolId: BigNumber;
    poolAddress: string;
    manager: string;
  }
>;

export type OwnershipTransferredEvent = TypedEvent<
  [string, string] & { previousOwner: string; newOwner: string }
>;

export class PresaleFairLaunchFactoryV1 extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: PresaleFairLaunchFactoryV1Interface;

  functions: {
    MAX_PERCENT_FEE_SYSTEM(overrides?: CallOverrides): Promise<[BigNumber]>;

    ONE_HUNDRED_PERCENT(overrides?: CallOverrides): Promise<[BigNumber]>;

    admins(arg0: string, overrides?: CallOverrides): Promise<[boolean]>;

    calculateTokensForLiquidity(
      _percentForLiquidity: BigNumberish,
      _tokensForPresale: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    changeCreationFee(
      _creationFee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    changePercentFeeRaised(
      _percentFeeRaised: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    changePercentRefund(
      _percentRefund: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    changeRoyaltyAddress(
      _royaltyAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    containerPools(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    creationFee(overrides?: CallOverrides): Promise<[BigNumber]>;

    deploy(
      _tokenAddress: string,
      _percentForLiquidity: BigNumberish,
      _tokensForPresale: BigNumberish,
      _startTime: BigNumberish,
      _endTime: BigNumberish,
      _softCap: BigNumberish,
      _maxContribution: BigNumberish,
      _dexRouter: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    dexRouters(arg0: string, overrides?: CallOverrides): Promise<[string]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    percentFeeRaised(overrides?: CallOverrides): Promise<[BigNumber]>;

    percentRefund(overrides?: CallOverrides): Promise<[BigNumber]>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    royaltyAddress(overrides?: CallOverrides): Promise<[string]>;

    tokens(arg0: string, overrides?: CallOverrides): Promise<[string]>;

    totalPool(overrides?: CallOverrides): Promise<[BigNumber]>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    updateAdmin(
      _admin: string,
      _isAdd: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  MAX_PERCENT_FEE_SYSTEM(overrides?: CallOverrides): Promise<BigNumber>;

  ONE_HUNDRED_PERCENT(overrides?: CallOverrides): Promise<BigNumber>;

  admins(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  calculateTokensForLiquidity(
    _percentForLiquidity: BigNumberish,
    _tokensForPresale: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  changeCreationFee(
    _creationFee: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  changePercentFeeRaised(
    _percentFeeRaised: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  changePercentRefund(
    _percentRefund: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  changeRoyaltyAddress(
    _royaltyAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  containerPools(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  creationFee(overrides?: CallOverrides): Promise<BigNumber>;

  deploy(
    _tokenAddress: string,
    _percentForLiquidity: BigNumberish,
    _tokensForPresale: BigNumberish,
    _startTime: BigNumberish,
    _endTime: BigNumberish,
    _softCap: BigNumberish,
    _maxContribution: BigNumberish,
    _dexRouter: string,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  dexRouters(arg0: string, overrides?: CallOverrides): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  percentFeeRaised(overrides?: CallOverrides): Promise<BigNumber>;

  percentRefund(overrides?: CallOverrides): Promise<BigNumber>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  royaltyAddress(overrides?: CallOverrides): Promise<string>;

  tokens(arg0: string, overrides?: CallOverrides): Promise<string>;

  totalPool(overrides?: CallOverrides): Promise<BigNumber>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  updateAdmin(
    _admin: string,
    _isAdd: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    MAX_PERCENT_FEE_SYSTEM(overrides?: CallOverrides): Promise<BigNumber>;

    ONE_HUNDRED_PERCENT(overrides?: CallOverrides): Promise<BigNumber>;

    admins(arg0: string, overrides?: CallOverrides): Promise<boolean>;

    calculateTokensForLiquidity(
      _percentForLiquidity: BigNumberish,
      _tokensForPresale: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    changeCreationFee(
      _creationFee: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    changePercentFeeRaised(
      _percentFeeRaised: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    changePercentRefund(
      _percentRefund: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    changeRoyaltyAddress(
      _royaltyAddress: string,
      overrides?: CallOverrides
    ): Promise<void>;

    containerPools(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    creationFee(overrides?: CallOverrides): Promise<BigNumber>;

    deploy(
      _tokenAddress: string,
      _percentForLiquidity: BigNumberish,
      _tokensForPresale: BigNumberish,
      _startTime: BigNumberish,
      _endTime: BigNumberish,
      _softCap: BigNumberish,
      _maxContribution: BigNumberish,
      _dexRouter: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, string] & { poolId: BigNumber; poolAddress: string }
    >;

    dexRouters(arg0: string, overrides?: CallOverrides): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    percentFeeRaised(overrides?: CallOverrides): Promise<BigNumber>;

    percentRefund(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    royaltyAddress(overrides?: CallOverrides): Promise<string>;

    tokens(arg0: string, overrides?: CallOverrides): Promise<string>;

    totalPool(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    updateAdmin(
      _admin: string,
      _isAdd: boolean,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "DeployPool(uint256,address,address)"(
      poolId?: null,
      poolAddress?: null,
      manager?: null
    ): TypedEventFilter<
      [BigNumber, string, string],
      { poolId: BigNumber; poolAddress: string; manager: string }
    >;

    DeployPool(
      poolId?: null,
      poolAddress?: null,
      manager?: null
    ): TypedEventFilter<
      [BigNumber, string, string],
      { poolId: BigNumber; poolAddress: string; manager: string }
    >;

    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;

    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;
  };

  estimateGas: {
    MAX_PERCENT_FEE_SYSTEM(overrides?: CallOverrides): Promise<BigNumber>;

    ONE_HUNDRED_PERCENT(overrides?: CallOverrides): Promise<BigNumber>;

    admins(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    calculateTokensForLiquidity(
      _percentForLiquidity: BigNumberish,
      _tokensForPresale: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    changeCreationFee(
      _creationFee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    changePercentFeeRaised(
      _percentFeeRaised: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    changePercentRefund(
      _percentRefund: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    changeRoyaltyAddress(
      _royaltyAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    containerPools(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    creationFee(overrides?: CallOverrides): Promise<BigNumber>;

    deploy(
      _tokenAddress: string,
      _percentForLiquidity: BigNumberish,
      _tokensForPresale: BigNumberish,
      _startTime: BigNumberish,
      _endTime: BigNumberish,
      _softCap: BigNumberish,
      _maxContribution: BigNumberish,
      _dexRouter: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    dexRouters(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    percentFeeRaised(overrides?: CallOverrides): Promise<BigNumber>;

    percentRefund(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    royaltyAddress(overrides?: CallOverrides): Promise<BigNumber>;

    tokens(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    totalPool(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    updateAdmin(
      _admin: string,
      _isAdd: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    MAX_PERCENT_FEE_SYSTEM(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    ONE_HUNDRED_PERCENT(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    admins(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    calculateTokensForLiquidity(
      _percentForLiquidity: BigNumberish,
      _tokensForPresale: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    changeCreationFee(
      _creationFee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    changePercentFeeRaised(
      _percentFeeRaised: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    changePercentRefund(
      _percentRefund: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    changeRoyaltyAddress(
      _royaltyAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    containerPools(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    creationFee(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    deploy(
      _tokenAddress: string,
      _percentForLiquidity: BigNumberish,
      _tokensForPresale: BigNumberish,
      _startTime: BigNumberish,
      _endTime: BigNumberish,
      _softCap: BigNumberish,
      _maxContribution: BigNumberish,
      _dexRouter: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    dexRouters(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    percentFeeRaised(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    percentRefund(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    royaltyAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    tokens(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    totalPool(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    updateAdmin(
      _admin: string,
      _isAdd: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}