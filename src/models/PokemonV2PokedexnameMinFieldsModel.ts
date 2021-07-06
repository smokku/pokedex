import { Instance } from "mobx-state-tree"
import { PokemonV2PokedexnameMinFieldsModelBase } from "./PokemonV2PokedexnameMinFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokedexnameMinFieldsModel */
export interface PokemonV2PokedexnameMinFieldsModelType extends Instance<typeof PokemonV2PokedexnameMinFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokedexnameMinFieldsModel */
export { selectFromPokemonV2PokedexnameMinFields, pokemonV2PokedexnameMinFieldsModelPrimitives, PokemonV2PokedexnameMinFieldsModelSelector } from "./PokemonV2PokedexnameMinFieldsModel.base"

/**
 * PokemonV2PokedexnameMinFieldsModel
 *
 * aggregate min on columns
 */
export const PokemonV2PokedexnameMinFieldsModel = PokemonV2PokedexnameMinFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
