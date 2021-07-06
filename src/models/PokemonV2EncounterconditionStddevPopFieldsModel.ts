import { Instance } from "mobx-state-tree"
import { PokemonV2EncounterconditionStddevPopFieldsModelBase } from "./PokemonV2EncounterconditionStddevPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2EncounterconditionStddevPopFieldsModel */
export interface PokemonV2EncounterconditionStddevPopFieldsModelType extends Instance<typeof PokemonV2EncounterconditionStddevPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2EncounterconditionStddevPopFieldsModel */
export { selectFromPokemonV2EncounterconditionStddevPopFields, pokemonV2EncounterconditionStddevPopFieldsModelPrimitives, PokemonV2EncounterconditionStddevPopFieldsModelSelector } from "./PokemonV2EncounterconditionStddevPopFieldsModel.base"

/**
 * PokemonV2EncounterconditionStddevPopFieldsModel
 *
 * aggregate stddev_pop on columns
 */
export const PokemonV2EncounterconditionStddevPopFieldsModel = PokemonV2EncounterconditionStddevPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
