import { Instance } from "mobx-state-tree"
import { PokemonV2EncounterconditionMaxFieldsModelBase } from "./PokemonV2EncounterconditionMaxFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2EncounterconditionMaxFieldsModel */
export interface PokemonV2EncounterconditionMaxFieldsModelType extends Instance<typeof PokemonV2EncounterconditionMaxFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2EncounterconditionMaxFieldsModel */
export { selectFromPokemonV2EncounterconditionMaxFields, pokemonV2EncounterconditionMaxFieldsModelPrimitives, PokemonV2EncounterconditionMaxFieldsModelSelector } from "./PokemonV2EncounterconditionMaxFieldsModel.base"

/**
 * PokemonV2EncounterconditionMaxFieldsModel
 *
 * aggregate max on columns
 */
export const PokemonV2EncounterconditionMaxFieldsModel = PokemonV2EncounterconditionMaxFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
