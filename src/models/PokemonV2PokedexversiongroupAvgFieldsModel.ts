import { Instance } from "mobx-state-tree"
import { PokemonV2PokedexversiongroupAvgFieldsModelBase } from "./PokemonV2PokedexversiongroupAvgFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokedexversiongroupAvgFieldsModel */
export interface PokemonV2PokedexversiongroupAvgFieldsModelType extends Instance<typeof PokemonV2PokedexversiongroupAvgFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokedexversiongroupAvgFieldsModel */
export { selectFromPokemonV2PokedexversiongroupAvgFields, pokemonV2PokedexversiongroupAvgFieldsModelPrimitives, PokemonV2PokedexversiongroupAvgFieldsModelSelector } from "./PokemonV2PokedexversiongroupAvgFieldsModel.base"

/**
 * PokemonV2PokedexversiongroupAvgFieldsModel
 *
 * aggregate avg on columns
 */
export const PokemonV2PokedexversiongroupAvgFieldsModel = PokemonV2PokedexversiongroupAvgFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
