import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonformSumFieldsModelBase } from "./PokemonV2PokemonformSumFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonformSumFieldsModel */
export interface PokemonV2PokemonformSumFieldsModelType extends Instance<typeof PokemonV2PokemonformSumFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonformSumFieldsModel */
export { selectFromPokemonV2PokemonformSumFields, pokemonV2PokemonformSumFieldsModelPrimitives, PokemonV2PokemonformSumFieldsModelSelector } from "./PokemonV2PokemonformSumFieldsModel.base"

/**
 * PokemonV2PokemonformSumFieldsModel
 *
 * aggregate sum on columns
 */
export const PokemonV2PokemonformSumFieldsModel = PokemonV2PokemonformSumFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
