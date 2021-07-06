import { Instance } from "mobx-state-tree"
import { PokemonV2PokedexversiongroupAggregateFieldsModelBase } from "./PokemonV2PokedexversiongroupAggregateFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokedexversiongroupAggregateFieldsModel */
export interface PokemonV2PokedexversiongroupAggregateFieldsModelType extends Instance<typeof PokemonV2PokedexversiongroupAggregateFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokedexversiongroupAggregateFieldsModel */
export { selectFromPokemonV2PokedexversiongroupAggregateFields, pokemonV2PokedexversiongroupAggregateFieldsModelPrimitives, PokemonV2PokedexversiongroupAggregateFieldsModelSelector } from "./PokemonV2PokedexversiongroupAggregateFieldsModel.base"

/**
 * PokemonV2PokedexversiongroupAggregateFieldsModel
 *
 * aggregate fields of "pokemon_v2_pokedexversiongroup"
 */
export const PokemonV2PokedexversiongroupAggregateFieldsModel = PokemonV2PokedexversiongroupAggregateFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
