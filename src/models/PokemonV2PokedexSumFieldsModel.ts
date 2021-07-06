import { Instance } from "mobx-state-tree"
import { PokemonV2PokedexSumFieldsModelBase } from "./PokemonV2PokedexSumFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokedexSumFieldsModel */
export interface PokemonV2PokedexSumFieldsModelType extends Instance<typeof PokemonV2PokedexSumFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokedexSumFieldsModel */
export { selectFromPokemonV2PokedexSumFields, pokemonV2PokedexSumFieldsModelPrimitives, PokemonV2PokedexSumFieldsModelSelector } from "./PokemonV2PokedexSumFieldsModel.base"

/**
 * PokemonV2PokedexSumFieldsModel
 *
 * aggregate sum on columns
 */
export const PokemonV2PokedexSumFieldsModel = PokemonV2PokedexSumFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
