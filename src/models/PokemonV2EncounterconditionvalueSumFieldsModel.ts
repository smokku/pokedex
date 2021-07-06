import { Instance } from "mobx-state-tree"
import { PokemonV2EncounterconditionvalueSumFieldsModelBase } from "./PokemonV2EncounterconditionvalueSumFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2EncounterconditionvalueSumFieldsModel */
export interface PokemonV2EncounterconditionvalueSumFieldsModelType extends Instance<typeof PokemonV2EncounterconditionvalueSumFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2EncounterconditionvalueSumFieldsModel */
export { selectFromPokemonV2EncounterconditionvalueSumFields, pokemonV2EncounterconditionvalueSumFieldsModelPrimitives, PokemonV2EncounterconditionvalueSumFieldsModelSelector } from "./PokemonV2EncounterconditionvalueSumFieldsModel.base"

/**
 * PokemonV2EncounterconditionvalueSumFieldsModel
 *
 * aggregate sum on columns
 */
export const PokemonV2EncounterconditionvalueSumFieldsModel = PokemonV2EncounterconditionvalueSumFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
