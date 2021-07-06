import { Instance } from "mobx-state-tree"
import { PokemonV2PokedexnameAvgFieldsModelBase } from "./PokemonV2PokedexnameAvgFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokedexnameAvgFieldsModel */
export interface PokemonV2PokedexnameAvgFieldsModelType extends Instance<typeof PokemonV2PokedexnameAvgFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokedexnameAvgFieldsModel */
export { selectFromPokemonV2PokedexnameAvgFields, pokemonV2PokedexnameAvgFieldsModelPrimitives, PokemonV2PokedexnameAvgFieldsModelSelector } from "./PokemonV2PokedexnameAvgFieldsModel.base"

/**
 * PokemonV2PokedexnameAvgFieldsModel
 *
 * aggregate avg on columns
 */
export const PokemonV2PokedexnameAvgFieldsModel = PokemonV2PokedexnameAvgFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
