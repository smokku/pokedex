import { Instance } from "mobx-state-tree"
import { PokemonV2EncounterconditionvaluenameMaxFieldsModelBase } from "./PokemonV2EncounterconditionvaluenameMaxFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2EncounterconditionvaluenameMaxFieldsModel */
export interface PokemonV2EncounterconditionvaluenameMaxFieldsModelType extends Instance<typeof PokemonV2EncounterconditionvaluenameMaxFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2EncounterconditionvaluenameMaxFieldsModel */
export { selectFromPokemonV2EncounterconditionvaluenameMaxFields, pokemonV2EncounterconditionvaluenameMaxFieldsModelPrimitives, PokemonV2EncounterconditionvaluenameMaxFieldsModelSelector } from "./PokemonV2EncounterconditionvaluenameMaxFieldsModel.base"

/**
 * PokemonV2EncounterconditionvaluenameMaxFieldsModel
 *
 * aggregate max on columns
 */
export const PokemonV2EncounterconditionvaluenameMaxFieldsModel = PokemonV2EncounterconditionvaluenameMaxFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
