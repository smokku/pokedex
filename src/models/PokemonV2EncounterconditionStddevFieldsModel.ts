import { Instance } from "mobx-state-tree"
import { PokemonV2EncounterconditionStddevFieldsModelBase } from "./PokemonV2EncounterconditionStddevFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2EncounterconditionStddevFieldsModel */
export interface PokemonV2EncounterconditionStddevFieldsModelType extends Instance<typeof PokemonV2EncounterconditionStddevFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2EncounterconditionStddevFieldsModel */
export { selectFromPokemonV2EncounterconditionStddevFields, pokemonV2EncounterconditionStddevFieldsModelPrimitives, PokemonV2EncounterconditionStddevFieldsModelSelector } from "./PokemonV2EncounterconditionStddevFieldsModel.base"

/**
 * PokemonV2EncounterconditionStddevFieldsModel
 *
 * aggregate stddev on columns
 */
export const PokemonV2EncounterconditionStddevFieldsModel = PokemonV2EncounterconditionStddevFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
