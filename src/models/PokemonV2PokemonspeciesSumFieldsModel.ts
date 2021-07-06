import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonspeciesSumFieldsModelBase } from "./PokemonV2PokemonspeciesSumFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonspeciesSumFieldsModel */
export interface PokemonV2PokemonspeciesSumFieldsModelType extends Instance<typeof PokemonV2PokemonspeciesSumFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonspeciesSumFieldsModel */
export { selectFromPokemonV2PokemonspeciesSumFields, pokemonV2PokemonspeciesSumFieldsModelPrimitives, PokemonV2PokemonspeciesSumFieldsModelSelector } from "./PokemonV2PokemonspeciesSumFieldsModel.base"

/**
 * PokemonV2PokemonspeciesSumFieldsModel
 *
 * aggregate sum on columns
 */
export const PokemonV2PokemonspeciesSumFieldsModel = PokemonV2PokemonspeciesSumFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
