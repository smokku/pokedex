import { Instance } from "mobx-state-tree"
import { PokemonV2EncounterconditionvaluemapVarPopFieldsModelBase } from "./PokemonV2EncounterconditionvaluemapVarPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2EncounterconditionvaluemapVarPopFieldsModel */
export interface PokemonV2EncounterconditionvaluemapVarPopFieldsModelType extends Instance<typeof PokemonV2EncounterconditionvaluemapVarPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2EncounterconditionvaluemapVarPopFieldsModel */
export { selectFromPokemonV2EncounterconditionvaluemapVarPopFields, pokemonV2EncounterconditionvaluemapVarPopFieldsModelPrimitives, PokemonV2EncounterconditionvaluemapVarPopFieldsModelSelector } from "./PokemonV2EncounterconditionvaluemapVarPopFieldsModel.base"

/**
 * PokemonV2EncounterconditionvaluemapVarPopFieldsModel
 *
 * aggregate var_pop on columns
 */
export const PokemonV2EncounterconditionvaluemapVarPopFieldsModel = PokemonV2EncounterconditionvaluemapVarPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
