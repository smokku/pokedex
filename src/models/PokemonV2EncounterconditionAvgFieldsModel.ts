import { Instance } from "mobx-state-tree"
import { PokemonV2EncounterconditionAvgFieldsModelBase } from "./PokemonV2EncounterconditionAvgFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2EncounterconditionAvgFieldsModel */
export interface PokemonV2EncounterconditionAvgFieldsModelType extends Instance<typeof PokemonV2EncounterconditionAvgFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2EncounterconditionAvgFieldsModel */
export { selectFromPokemonV2EncounterconditionAvgFields, pokemonV2EncounterconditionAvgFieldsModelPrimitives, PokemonV2EncounterconditionAvgFieldsModelSelector } from "./PokemonV2EncounterconditionAvgFieldsModel.base"

/**
 * PokemonV2EncounterconditionAvgFieldsModel
 *
 * aggregate avg on columns
 */
export const PokemonV2EncounterconditionAvgFieldsModel = PokemonV2EncounterconditionAvgFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
