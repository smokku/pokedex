/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2MovelearnmethoddescriptionAggregateModel, PokemonV2MovelearnmethoddescriptionAggregateModelType } from "./PokemonV2MovelearnmethoddescriptionAggregateModel"
import { PokemonV2MovelearnmethoddescriptionAggregateModelSelector } from "./PokemonV2MovelearnmethoddescriptionAggregateModel.base"
import { PokemonV2MovelearnmethoddescriptionModel, PokemonV2MovelearnmethoddescriptionModelType } from "./PokemonV2MovelearnmethoddescriptionModel"
import { PokemonV2MovelearnmethoddescriptionModelSelector } from "./PokemonV2MovelearnmethoddescriptionModel.base"
import { PokemonV2MovelearnmethodnameAggregateModel, PokemonV2MovelearnmethodnameAggregateModelType } from "./PokemonV2MovelearnmethodnameAggregateModel"
import { PokemonV2MovelearnmethodnameAggregateModelSelector } from "./PokemonV2MovelearnmethodnameAggregateModel.base"
import { PokemonV2MovelearnmethodnameModel, PokemonV2MovelearnmethodnameModelType } from "./PokemonV2MovelearnmethodnameModel"
import { PokemonV2MovelearnmethodnameModelSelector } from "./PokemonV2MovelearnmethodnameModel.base"
import { PokemonV2PokemonmoveAggregateModel, PokemonV2PokemonmoveAggregateModelType } from "./PokemonV2PokemonmoveAggregateModel"
import { PokemonV2PokemonmoveAggregateModelSelector } from "./PokemonV2PokemonmoveAggregateModel.base"
import { PokemonV2PokemonmoveModel, PokemonV2PokemonmoveModelType } from "./PokemonV2PokemonmoveModel"
import { PokemonV2PokemonmoveModelSelector } from "./PokemonV2PokemonmoveModel.base"
import { PokemonV2VersiongroupmovelearnmethodAggregateModel, PokemonV2VersiongroupmovelearnmethodAggregateModelType } from "./PokemonV2VersiongroupmovelearnmethodAggregateModel"
import { PokemonV2VersiongroupmovelearnmethodAggregateModelSelector } from "./PokemonV2VersiongroupmovelearnmethodAggregateModel.base"
import { PokemonV2VersiongroupmovelearnmethodModel, PokemonV2VersiongroupmovelearnmethodModelType } from "./PokemonV2VersiongroupmovelearnmethodModel"
import { PokemonV2VersiongroupmovelearnmethodModelSelector } from "./PokemonV2VersiongroupmovelearnmethodModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2MovelearnmethodBase
 * auto generated base class for the model PokemonV2MovelearnmethodModel.
 *
 * columns and relationships of "pokemon_v2_movelearnmethod"
 */
export const PokemonV2MovelearnmethodModelBase = ModelBase
  .named('PokemonV2Movelearnmethod')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_movelearnmethod"), "pokemon_v2_movelearnmethod"),
    id: types.union(types.undefined, types.integer),
    name: types.union(types.undefined, types.string),
    /** An array relationship */
    pokemon_v2_movelearnmethoddescriptions: types.union(types.undefined, types.array(types.late((): any => PokemonV2MovelearnmethoddescriptionModel))),
    /** An aggregate relationship */
    pokemon_v2_movelearnmethoddescriptions_aggregate: types.union(types.undefined, types.late((): any => PokemonV2MovelearnmethoddescriptionAggregateModel)),
    /** An array relationship */
    pokemon_v2_movelearnmethodnames: types.union(types.undefined, types.array(types.late((): any => PokemonV2MovelearnmethodnameModel))),
    /** An aggregate relationship */
    pokemon_v2_movelearnmethodnames_aggregate: types.union(types.undefined, types.late((): any => PokemonV2MovelearnmethodnameAggregateModel)),
    /** An array relationship */
    pokemon_v2_pokemonmoves: types.union(types.undefined, types.array(types.late((): any => PokemonV2PokemonmoveModel))),
    /** An aggregate relationship */
    pokemon_v2_pokemonmoves_aggregate: types.union(types.undefined, types.late((): any => PokemonV2PokemonmoveAggregateModel)),
    /** An array relationship */
    pokemon_v2_versiongroupmovelearnmethods: types.union(types.undefined, types.array(types.late((): any => PokemonV2VersiongroupmovelearnmethodModel))),
    /** An aggregate relationship */
    pokemon_v2_versiongroupmovelearnmethods_aggregate: types.union(types.undefined, types.late((): any => PokemonV2VersiongroupmovelearnmethodAggregateModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2MovelearnmethodModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get name() { return this.__attr(`name`) }
  pokemon_v2_movelearnmethoddescriptions(builder?: string | PokemonV2MovelearnmethoddescriptionModelSelector | ((selector: PokemonV2MovelearnmethoddescriptionModelSelector) => PokemonV2MovelearnmethoddescriptionModelSelector)) { return this.__child(`pokemon_v2_movelearnmethoddescriptions`, PokemonV2MovelearnmethoddescriptionModelSelector, builder) }
  pokemon_v2_movelearnmethoddescriptions_aggregate(builder?: string | PokemonV2MovelearnmethoddescriptionAggregateModelSelector | ((selector: PokemonV2MovelearnmethoddescriptionAggregateModelSelector) => PokemonV2MovelearnmethoddescriptionAggregateModelSelector)) { return this.__child(`pokemon_v2_movelearnmethoddescriptions_aggregate`, PokemonV2MovelearnmethoddescriptionAggregateModelSelector, builder) }
  pokemon_v2_movelearnmethodnames(builder?: string | PokemonV2MovelearnmethodnameModelSelector | ((selector: PokemonV2MovelearnmethodnameModelSelector) => PokemonV2MovelearnmethodnameModelSelector)) { return this.__child(`pokemon_v2_movelearnmethodnames`, PokemonV2MovelearnmethodnameModelSelector, builder) }
  pokemon_v2_movelearnmethodnames_aggregate(builder?: string | PokemonV2MovelearnmethodnameAggregateModelSelector | ((selector: PokemonV2MovelearnmethodnameAggregateModelSelector) => PokemonV2MovelearnmethodnameAggregateModelSelector)) { return this.__child(`pokemon_v2_movelearnmethodnames_aggregate`, PokemonV2MovelearnmethodnameAggregateModelSelector, builder) }
  pokemon_v2_pokemonmoves(builder?: string | PokemonV2PokemonmoveModelSelector | ((selector: PokemonV2PokemonmoveModelSelector) => PokemonV2PokemonmoveModelSelector)) { return this.__child(`pokemon_v2_pokemonmoves`, PokemonV2PokemonmoveModelSelector, builder) }
  pokemon_v2_pokemonmoves_aggregate(builder?: string | PokemonV2PokemonmoveAggregateModelSelector | ((selector: PokemonV2PokemonmoveAggregateModelSelector) => PokemonV2PokemonmoveAggregateModelSelector)) { return this.__child(`pokemon_v2_pokemonmoves_aggregate`, PokemonV2PokemonmoveAggregateModelSelector, builder) }
  pokemon_v2_versiongroupmovelearnmethods(builder?: string | PokemonV2VersiongroupmovelearnmethodModelSelector | ((selector: PokemonV2VersiongroupmovelearnmethodModelSelector) => PokemonV2VersiongroupmovelearnmethodModelSelector)) { return this.__child(`pokemon_v2_versiongroupmovelearnmethods`, PokemonV2VersiongroupmovelearnmethodModelSelector, builder) }
  pokemon_v2_versiongroupmovelearnmethods_aggregate(builder?: string | PokemonV2VersiongroupmovelearnmethodAggregateModelSelector | ((selector: PokemonV2VersiongroupmovelearnmethodAggregateModelSelector) => PokemonV2VersiongroupmovelearnmethodAggregateModelSelector)) { return this.__child(`pokemon_v2_versiongroupmovelearnmethods_aggregate`, PokemonV2VersiongroupmovelearnmethodAggregateModelSelector, builder) }
}
export function selectFromPokemonV2Movelearnmethod() {
  return new PokemonV2MovelearnmethodModelSelector()
}

export const pokemonV2MovelearnmethodModelPrimitives = selectFromPokemonV2Movelearnmethod().name
