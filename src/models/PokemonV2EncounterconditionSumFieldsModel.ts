import { Instance } from "mobx-state-tree"
import { PokemonV2EncounterconditionSumFieldsModelBase } from "./PokemonV2EncounterconditionSumFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2EncounterconditionSumFieldsModel */
export interface PokemonV2EncounterconditionSumFieldsModelType extends Instance<typeof PokemonV2EncounterconditionSumFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2EncounterconditionSumFieldsModel */
export { selectFromPokemonV2EncounterconditionSumFields, pokemonV2EncounterconditionSumFieldsModelPrimitives, PokemonV2EncounterconditionSumFieldsModelSelector } from "./PokemonV2EncounterconditionSumFieldsModel.base"

/**
 * PokemonV2EncounterconditionSumFieldsModel
 *
 * aggregate sum on columns
 */
export const PokemonV2EncounterconditionSumFieldsModel = PokemonV2EncounterconditionSumFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
