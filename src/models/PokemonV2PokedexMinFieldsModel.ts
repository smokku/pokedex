import { Instance } from "mobx-state-tree"
import { PokemonV2PokedexMinFieldsModelBase } from "./PokemonV2PokedexMinFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokedexMinFieldsModel */
export interface PokemonV2PokedexMinFieldsModelType extends Instance<typeof PokemonV2PokedexMinFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokedexMinFieldsModel */
export { selectFromPokemonV2PokedexMinFields, pokemonV2PokedexMinFieldsModelPrimitives, PokemonV2PokedexMinFieldsModelSelector } from "./PokemonV2PokedexMinFieldsModel.base"

/**
 * PokemonV2PokedexMinFieldsModel
 *
 * aggregate min on columns
 */
export const PokemonV2PokedexMinFieldsModel = PokemonV2PokedexMinFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
