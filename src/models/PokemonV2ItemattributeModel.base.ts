/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2ItemattributedescriptionAggregateModel, PokemonV2ItemattributedescriptionAggregateModelType } from "./PokemonV2ItemattributedescriptionAggregateModel"
import { PokemonV2ItemattributedescriptionAggregateModelSelector } from "./PokemonV2ItemattributedescriptionAggregateModel.base"
import { PokemonV2ItemattributedescriptionModel, PokemonV2ItemattributedescriptionModelType } from "./PokemonV2ItemattributedescriptionModel"
import { PokemonV2ItemattributedescriptionModelSelector } from "./PokemonV2ItemattributedescriptionModel.base"
import { PokemonV2ItemattributemapAggregateModel, PokemonV2ItemattributemapAggregateModelType } from "./PokemonV2ItemattributemapAggregateModel"
import { PokemonV2ItemattributemapAggregateModelSelector } from "./PokemonV2ItemattributemapAggregateModel.base"
import { PokemonV2ItemattributemapModel, PokemonV2ItemattributemapModelType } from "./PokemonV2ItemattributemapModel"
import { PokemonV2ItemattributemapModelSelector } from "./PokemonV2ItemattributemapModel.base"
import { PokemonV2ItemattributenameAggregateModel, PokemonV2ItemattributenameAggregateModelType } from "./PokemonV2ItemattributenameAggregateModel"
import { PokemonV2ItemattributenameAggregateModelSelector } from "./PokemonV2ItemattributenameAggregateModel.base"
import { PokemonV2ItemattributenameModel, PokemonV2ItemattributenameModelType } from "./PokemonV2ItemattributenameModel"
import { PokemonV2ItemattributenameModelSelector } from "./PokemonV2ItemattributenameModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2ItemattributeBase
 * auto generated base class for the model PokemonV2ItemattributeModel.
 *
 * columns and relationships of "pokemon_v2_itemattribute"
 */
export const PokemonV2ItemattributeModelBase = ModelBase
  .named('PokemonV2Itemattribute')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_itemattribute"), "pokemon_v2_itemattribute"),
    id: types.union(types.undefined, types.integer),
    name: types.union(types.undefined, types.string),
    /** An array relationship */
    pokemon_v2_itemattributedescriptions: types.union(types.undefined, types.array(types.late((): any => PokemonV2ItemattributedescriptionModel))),
    /** An aggregate relationship */
    pokemon_v2_itemattributedescriptions_aggregate: types.union(types.undefined, types.late((): any => PokemonV2ItemattributedescriptionAggregateModel)),
    /** An array relationship */
    pokemon_v2_itemattributemaps: types.union(types.undefined, types.array(types.late((): any => PokemonV2ItemattributemapModel))),
    /** An aggregate relationship */
    pokemon_v2_itemattributemaps_aggregate: types.union(types.undefined, types.late((): any => PokemonV2ItemattributemapAggregateModel)),
    /** An array relationship */
    pokemon_v2_itemattributenames: types.union(types.undefined, types.array(types.late((): any => PokemonV2ItemattributenameModel))),
    /** An aggregate relationship */
    pokemon_v2_itemattributenames_aggregate: types.union(types.undefined, types.late((): any => PokemonV2ItemattributenameAggregateModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2ItemattributeModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get name() { return this.__attr(`name`) }
  pokemon_v2_itemattributedescriptions(builder?: string | PokemonV2ItemattributedescriptionModelSelector | ((selector: PokemonV2ItemattributedescriptionModelSelector) => PokemonV2ItemattributedescriptionModelSelector)) { return this.__child(`pokemon_v2_itemattributedescriptions`, PokemonV2ItemattributedescriptionModelSelector, builder) }
  pokemon_v2_itemattributedescriptions_aggregate(builder?: string | PokemonV2ItemattributedescriptionAggregateModelSelector | ((selector: PokemonV2ItemattributedescriptionAggregateModelSelector) => PokemonV2ItemattributedescriptionAggregateModelSelector)) { return this.__child(`pokemon_v2_itemattributedescriptions_aggregate`, PokemonV2ItemattributedescriptionAggregateModelSelector, builder) }
  pokemon_v2_itemattributemaps(builder?: string | PokemonV2ItemattributemapModelSelector | ((selector: PokemonV2ItemattributemapModelSelector) => PokemonV2ItemattributemapModelSelector)) { return this.__child(`pokemon_v2_itemattributemaps`, PokemonV2ItemattributemapModelSelector, builder) }
  pokemon_v2_itemattributemaps_aggregate(builder?: string | PokemonV2ItemattributemapAggregateModelSelector | ((selector: PokemonV2ItemattributemapAggregateModelSelector) => PokemonV2ItemattributemapAggregateModelSelector)) { return this.__child(`pokemon_v2_itemattributemaps_aggregate`, PokemonV2ItemattributemapAggregateModelSelector, builder) }
  pokemon_v2_itemattributenames(builder?: string | PokemonV2ItemattributenameModelSelector | ((selector: PokemonV2ItemattributenameModelSelector) => PokemonV2ItemattributenameModelSelector)) { return this.__child(`pokemon_v2_itemattributenames`, PokemonV2ItemattributenameModelSelector, builder) }
  pokemon_v2_itemattributenames_aggregate(builder?: string | PokemonV2ItemattributenameAggregateModelSelector | ((selector: PokemonV2ItemattributenameAggregateModelSelector) => PokemonV2ItemattributenameAggregateModelSelector)) { return this.__child(`pokemon_v2_itemattributenames_aggregate`, PokemonV2ItemattributenameAggregateModelSelector, builder) }
}
export function selectFromPokemonV2Itemattribute() {
  return new PokemonV2ItemattributeModelSelector()
}

export const pokemonV2ItemattributeModelPrimitives = selectFromPokemonV2Itemattribute().name
