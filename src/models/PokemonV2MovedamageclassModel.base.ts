/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2MoveAggregateModel, PokemonV2MoveAggregateModelType } from "./PokemonV2MoveAggregateModel"
import { PokemonV2MoveAggregateModelSelector } from "./PokemonV2MoveAggregateModel.base"
import { PokemonV2MoveModel, PokemonV2MoveModelType } from "./PokemonV2MoveModel"
import { PokemonV2MoveModelSelector } from "./PokemonV2MoveModel.base"
import { PokemonV2MovedamageclassdescriptionAggregateModel, PokemonV2MovedamageclassdescriptionAggregateModelType } from "./PokemonV2MovedamageclassdescriptionAggregateModel"
import { PokemonV2MovedamageclassdescriptionAggregateModelSelector } from "./PokemonV2MovedamageclassdescriptionAggregateModel.base"
import { PokemonV2MovedamageclassdescriptionModel, PokemonV2MovedamageclassdescriptionModelType } from "./PokemonV2MovedamageclassdescriptionModel"
import { PokemonV2MovedamageclassdescriptionModelSelector } from "./PokemonV2MovedamageclassdescriptionModel.base"
import { PokemonV2MovedamageclassnameAggregateModel, PokemonV2MovedamageclassnameAggregateModelType } from "./PokemonV2MovedamageclassnameAggregateModel"
import { PokemonV2MovedamageclassnameAggregateModelSelector } from "./PokemonV2MovedamageclassnameAggregateModel.base"
import { PokemonV2MovedamageclassnameModel, PokemonV2MovedamageclassnameModelType } from "./PokemonV2MovedamageclassnameModel"
import { PokemonV2MovedamageclassnameModelSelector } from "./PokemonV2MovedamageclassnameModel.base"
import { PokemonV2StatAggregateModel, PokemonV2StatAggregateModelType } from "./PokemonV2StatAggregateModel"
import { PokemonV2StatAggregateModelSelector } from "./PokemonV2StatAggregateModel.base"
import { PokemonV2StatModel, PokemonV2StatModelType } from "./PokemonV2StatModel"
import { PokemonV2StatModelSelector } from "./PokemonV2StatModel.base"
import { PokemonV2TypeAggregateModel, PokemonV2TypeAggregateModelType } from "./PokemonV2TypeAggregateModel"
import { PokemonV2TypeAggregateModelSelector } from "./PokemonV2TypeAggregateModel.base"
import { PokemonV2TypeModel, PokemonV2TypeModelType } from "./PokemonV2TypeModel"
import { PokemonV2TypeModelSelector } from "./PokemonV2TypeModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2MovedamageclassBase
 * auto generated base class for the model PokemonV2MovedamageclassModel.
 *
 * columns and relationships of "pokemon_v2_movedamageclass"
 */
export const PokemonV2MovedamageclassModelBase = ModelBase
  .named('PokemonV2Movedamageclass')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_movedamageclass"), "pokemon_v2_movedamageclass"),
    id: types.union(types.undefined, types.integer),
    name: types.union(types.undefined, types.string),
    /** An array relationship */
    pokemon_v2_movedamageclassdescriptions: types.union(types.undefined, types.array(types.late((): any => PokemonV2MovedamageclassdescriptionModel))),
    /** An aggregate relationship */
    pokemon_v2_movedamageclassdescriptions_aggregate: types.union(types.undefined, types.late((): any => PokemonV2MovedamageclassdescriptionAggregateModel)),
    /** An array relationship */
    pokemon_v2_movedamageclassnames: types.union(types.undefined, types.array(types.late((): any => PokemonV2MovedamageclassnameModel))),
    /** An aggregate relationship */
    pokemon_v2_movedamageclassnames_aggregate: types.union(types.undefined, types.late((): any => PokemonV2MovedamageclassnameAggregateModel)),
    /** An array relationship */
    pokemon_v2_moves: types.union(types.undefined, types.array(types.late((): any => PokemonV2MoveModel))),
    /** An aggregate relationship */
    pokemon_v2_moves_aggregate: types.union(types.undefined, types.late((): any => PokemonV2MoveAggregateModel)),
    /** An array relationship */
    pokemon_v2_stats: types.union(types.undefined, types.array(types.late((): any => PokemonV2StatModel))),
    /** An aggregate relationship */
    pokemon_v2_stats_aggregate: types.union(types.undefined, types.late((): any => PokemonV2StatAggregateModel)),
    /** An array relationship */
    pokemon_v2_types: types.union(types.undefined, types.array(types.late((): any => PokemonV2TypeModel))),
    /** An aggregate relationship */
    pokemon_v2_types_aggregate: types.union(types.undefined, types.late((): any => PokemonV2TypeAggregateModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2MovedamageclassModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get name() { return this.__attr(`name`) }
  pokemon_v2_movedamageclassdescriptions(builder?: string | PokemonV2MovedamageclassdescriptionModelSelector | ((selector: PokemonV2MovedamageclassdescriptionModelSelector) => PokemonV2MovedamageclassdescriptionModelSelector)) { return this.__child(`pokemon_v2_movedamageclassdescriptions`, PokemonV2MovedamageclassdescriptionModelSelector, builder) }
  pokemon_v2_movedamageclassdescriptions_aggregate(builder?: string | PokemonV2MovedamageclassdescriptionAggregateModelSelector | ((selector: PokemonV2MovedamageclassdescriptionAggregateModelSelector) => PokemonV2MovedamageclassdescriptionAggregateModelSelector)) { return this.__child(`pokemon_v2_movedamageclassdescriptions_aggregate`, PokemonV2MovedamageclassdescriptionAggregateModelSelector, builder) }
  pokemon_v2_movedamageclassnames(builder?: string | PokemonV2MovedamageclassnameModelSelector | ((selector: PokemonV2MovedamageclassnameModelSelector) => PokemonV2MovedamageclassnameModelSelector)) { return this.__child(`pokemon_v2_movedamageclassnames`, PokemonV2MovedamageclassnameModelSelector, builder) }
  pokemon_v2_movedamageclassnames_aggregate(builder?: string | PokemonV2MovedamageclassnameAggregateModelSelector | ((selector: PokemonV2MovedamageclassnameAggregateModelSelector) => PokemonV2MovedamageclassnameAggregateModelSelector)) { return this.__child(`pokemon_v2_movedamageclassnames_aggregate`, PokemonV2MovedamageclassnameAggregateModelSelector, builder) }
  pokemon_v2_moves(builder?: string | PokemonV2MoveModelSelector | ((selector: PokemonV2MoveModelSelector) => PokemonV2MoveModelSelector)) { return this.__child(`pokemon_v2_moves`, PokemonV2MoveModelSelector, builder) }
  pokemon_v2_moves_aggregate(builder?: string | PokemonV2MoveAggregateModelSelector | ((selector: PokemonV2MoveAggregateModelSelector) => PokemonV2MoveAggregateModelSelector)) { return this.__child(`pokemon_v2_moves_aggregate`, PokemonV2MoveAggregateModelSelector, builder) }
  pokemon_v2_stats(builder?: string | PokemonV2StatModelSelector | ((selector: PokemonV2StatModelSelector) => PokemonV2StatModelSelector)) { return this.__child(`pokemon_v2_stats`, PokemonV2StatModelSelector, builder) }
  pokemon_v2_stats_aggregate(builder?: string | PokemonV2StatAggregateModelSelector | ((selector: PokemonV2StatAggregateModelSelector) => PokemonV2StatAggregateModelSelector)) { return this.__child(`pokemon_v2_stats_aggregate`, PokemonV2StatAggregateModelSelector, builder) }
  pokemon_v2_types(builder?: string | PokemonV2TypeModelSelector | ((selector: PokemonV2TypeModelSelector) => PokemonV2TypeModelSelector)) { return this.__child(`pokemon_v2_types`, PokemonV2TypeModelSelector, builder) }
  pokemon_v2_types_aggregate(builder?: string | PokemonV2TypeAggregateModelSelector | ((selector: PokemonV2TypeAggregateModelSelector) => PokemonV2TypeAggregateModelSelector)) { return this.__child(`pokemon_v2_types_aggregate`, PokemonV2TypeAggregateModelSelector, builder) }
}
export function selectFromPokemonV2Movedamageclass() {
  return new PokemonV2MovedamageclassModelSelector()
}

export const pokemonV2MovedamageclassModelPrimitives = selectFromPokemonV2Movedamageclass().name
