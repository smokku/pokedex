/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PokemonV2BerryflavormapAggregateModel, PokemonV2BerryflavormapAggregateModelType } from "./PokemonV2BerryflavormapAggregateModel"
import { PokemonV2BerryflavormapAggregateModelSelector } from "./PokemonV2BerryflavormapAggregateModel.base"
import { PokemonV2BerryflavormapModel, PokemonV2BerryflavormapModelType } from "./PokemonV2BerryflavormapModel"
import { PokemonV2BerryflavormapModelSelector } from "./PokemonV2BerryflavormapModel.base"
import { PokemonV2BerryflavornameAggregateModel, PokemonV2BerryflavornameAggregateModelType } from "./PokemonV2BerryflavornameAggregateModel"
import { PokemonV2BerryflavornameAggregateModelSelector } from "./PokemonV2BerryflavornameAggregateModel.base"
import { PokemonV2BerryflavornameModel, PokemonV2BerryflavornameModelType } from "./PokemonV2BerryflavornameModel"
import { PokemonV2BerryflavornameModelSelector } from "./PokemonV2BerryflavornameModel.base"
import { PokemonV2ContesttypeModel, PokemonV2ContesttypeModelType } from "./PokemonV2ContesttypeModel"
import { PokemonV2ContesttypeModelSelector } from "./PokemonV2ContesttypeModel.base"
import { PokemonV2NatureAggregateModel, PokemonV2NatureAggregateModelType } from "./PokemonV2NatureAggregateModel"
import { PokemonV2NatureAggregateModelSelector } from "./PokemonV2NatureAggregateModel.base"
import { PokemonV2NatureModel, PokemonV2NatureModelType } from "./PokemonV2NatureModel"
import { PokemonV2NatureModelSelector } from "./PokemonV2NatureModel.base"
import { RootStoreType } from "./index"


/**
 * PokemonV2BerryflavorBase
 * auto generated base class for the model PokemonV2BerryflavorModel.
 *
 * columns and relationships of "pokemon_v2_berryflavor"
 */
export const PokemonV2BerryflavorModelBase = ModelBase
  .named('PokemonV2Berryflavor')
  .props({
    __typename: types.optional(types.literal("pokemon_v2_berryflavor"), "pokemon_v2_berryflavor"),
    contest_type_id: types.union(types.undefined, types.null, types.integer),
    id: types.union(types.undefined, types.integer),
    name: types.union(types.undefined, types.string),
    /** An array relationship */
    pokemonV2NaturesByLikesFlavorId: types.union(types.undefined, types.array(types.late((): any => PokemonV2NatureModel))),
    /** An aggregate relationship */
    pokemonV2NaturesByLikesFlavorId_aggregate: types.union(types.undefined, types.late((): any => PokemonV2NatureAggregateModel)),
    /** An array relationship */
    pokemon_v2_berryflavormaps: types.union(types.undefined, types.array(types.late((): any => PokemonV2BerryflavormapModel))),
    /** An aggregate relationship */
    pokemon_v2_berryflavormaps_aggregate: types.union(types.undefined, types.late((): any => PokemonV2BerryflavormapAggregateModel)),
    /** An array relationship */
    pokemon_v2_berryflavornames: types.union(types.undefined, types.array(types.late((): any => PokemonV2BerryflavornameModel))),
    /** An aggregate relationship */
    pokemon_v2_berryflavornames_aggregate: types.union(types.undefined, types.late((): any => PokemonV2BerryflavornameAggregateModel)),
    /** An object relationship */
    pokemon_v2_contesttype: types.union(types.undefined, types.null, types.late((): any => PokemonV2ContesttypeModel)),
    /** An array relationship */
    pokemon_v2_natures: types.union(types.undefined, types.array(types.late((): any => PokemonV2NatureModel))),
    /** An aggregate relationship */
    pokemon_v2_natures_aggregate: types.union(types.undefined, types.late((): any => PokemonV2NatureAggregateModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PokemonV2BerryflavorModelSelector extends QueryBuilder {
  get contest_type_id() { return this.__attr(`contest_type_id`) }
  get id() { return this.__attr(`id`) }
  get name() { return this.__attr(`name`) }
  pokemonV2NaturesByLikesFlavorId(builder?: string | PokemonV2NatureModelSelector | ((selector: PokemonV2NatureModelSelector) => PokemonV2NatureModelSelector)) { return this.__child(`pokemonV2NaturesByLikesFlavorId`, PokemonV2NatureModelSelector, builder) }
  pokemonV2NaturesByLikesFlavorId_aggregate(builder?: string | PokemonV2NatureAggregateModelSelector | ((selector: PokemonV2NatureAggregateModelSelector) => PokemonV2NatureAggregateModelSelector)) { return this.__child(`pokemonV2NaturesByLikesFlavorId_aggregate`, PokemonV2NatureAggregateModelSelector, builder) }
  pokemon_v2_berryflavormaps(builder?: string | PokemonV2BerryflavormapModelSelector | ((selector: PokemonV2BerryflavormapModelSelector) => PokemonV2BerryflavormapModelSelector)) { return this.__child(`pokemon_v2_berryflavormaps`, PokemonV2BerryflavormapModelSelector, builder) }
  pokemon_v2_berryflavormaps_aggregate(builder?: string | PokemonV2BerryflavormapAggregateModelSelector | ((selector: PokemonV2BerryflavormapAggregateModelSelector) => PokemonV2BerryflavormapAggregateModelSelector)) { return this.__child(`pokemon_v2_berryflavormaps_aggregate`, PokemonV2BerryflavormapAggregateModelSelector, builder) }
  pokemon_v2_berryflavornames(builder?: string | PokemonV2BerryflavornameModelSelector | ((selector: PokemonV2BerryflavornameModelSelector) => PokemonV2BerryflavornameModelSelector)) { return this.__child(`pokemon_v2_berryflavornames`, PokemonV2BerryflavornameModelSelector, builder) }
  pokemon_v2_berryflavornames_aggregate(builder?: string | PokemonV2BerryflavornameAggregateModelSelector | ((selector: PokemonV2BerryflavornameAggregateModelSelector) => PokemonV2BerryflavornameAggregateModelSelector)) { return this.__child(`pokemon_v2_berryflavornames_aggregate`, PokemonV2BerryflavornameAggregateModelSelector, builder) }
  pokemon_v2_contesttype(builder?: string | PokemonV2ContesttypeModelSelector | ((selector: PokemonV2ContesttypeModelSelector) => PokemonV2ContesttypeModelSelector)) { return this.__child(`pokemon_v2_contesttype`, PokemonV2ContesttypeModelSelector, builder) }
  pokemon_v2_natures(builder?: string | PokemonV2NatureModelSelector | ((selector: PokemonV2NatureModelSelector) => PokemonV2NatureModelSelector)) { return this.__child(`pokemon_v2_natures`, PokemonV2NatureModelSelector, builder) }
  pokemon_v2_natures_aggregate(builder?: string | PokemonV2NatureAggregateModelSelector | ((selector: PokemonV2NatureAggregateModelSelector) => PokemonV2NatureAggregateModelSelector)) { return this.__child(`pokemon_v2_natures_aggregate`, PokemonV2NatureAggregateModelSelector, builder) }
}
export function selectFromPokemonV2Berryflavor() {
  return new PokemonV2BerryflavorModelSelector()
}

export const pokemonV2BerryflavorModelPrimitives = selectFromPokemonV2Berryflavor().contest_type_id.name
