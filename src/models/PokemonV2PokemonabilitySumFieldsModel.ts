import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonabilitySumFieldsModelBase } from "./PokemonV2PokemonabilitySumFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonabilitySumFieldsModel */
export interface PokemonV2PokemonabilitySumFieldsModelType extends Instance<typeof PokemonV2PokemonabilitySumFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonabilitySumFieldsModel */
export { selectFromPokemonV2PokemonabilitySumFields, pokemonV2PokemonabilitySumFieldsModelPrimitives, PokemonV2PokemonabilitySumFieldsModelSelector } from "./PokemonV2PokemonabilitySumFieldsModel.base"

/**
 * PokemonV2PokemonabilitySumFieldsModel
 *
 * aggregate sum on columns
 */
export const PokemonV2PokemonabilitySumFieldsModel = PokemonV2PokemonabilitySumFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
