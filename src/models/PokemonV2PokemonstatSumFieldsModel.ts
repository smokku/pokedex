import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonstatSumFieldsModelBase } from "./PokemonV2PokemonstatSumFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonstatSumFieldsModel */
export interface PokemonV2PokemonstatSumFieldsModelType extends Instance<typeof PokemonV2PokemonstatSumFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonstatSumFieldsModel */
export { selectFromPokemonV2PokemonstatSumFields, pokemonV2PokemonstatSumFieldsModelPrimitives, PokemonV2PokemonstatSumFieldsModelSelector } from "./PokemonV2PokemonstatSumFieldsModel.base"

/**
 * PokemonV2PokemonstatSumFieldsModel
 *
 * aggregate sum on columns
 */
export const PokemonV2PokemonstatSumFieldsModel = PokemonV2PokemonstatSumFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
