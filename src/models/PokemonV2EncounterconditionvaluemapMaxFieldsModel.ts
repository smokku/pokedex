import { Instance } from "mobx-state-tree"
import { PokemonV2EncounterconditionvaluemapMaxFieldsModelBase } from "./PokemonV2EncounterconditionvaluemapMaxFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2EncounterconditionvaluemapMaxFieldsModel */
export interface PokemonV2EncounterconditionvaluemapMaxFieldsModelType extends Instance<typeof PokemonV2EncounterconditionvaluemapMaxFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2EncounterconditionvaluemapMaxFieldsModel */
export { selectFromPokemonV2EncounterconditionvaluemapMaxFields, pokemonV2EncounterconditionvaluemapMaxFieldsModelPrimitives, PokemonV2EncounterconditionvaluemapMaxFieldsModelSelector } from "./PokemonV2EncounterconditionvaluemapMaxFieldsModel.base"

/**
 * PokemonV2EncounterconditionvaluemapMaxFieldsModel
 *
 * aggregate max on columns
 */
export const PokemonV2EncounterconditionvaluemapMaxFieldsModel = PokemonV2EncounterconditionvaluemapMaxFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
