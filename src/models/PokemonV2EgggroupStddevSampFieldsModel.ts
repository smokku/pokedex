import { Instance } from "mobx-state-tree"
import { PokemonV2EgggroupStddevSampFieldsModelBase } from "./PokemonV2EgggroupStddevSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2EgggroupStddevSampFieldsModel */
export interface PokemonV2EgggroupStddevSampFieldsModelType extends Instance<typeof PokemonV2EgggroupStddevSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2EgggroupStddevSampFieldsModel */
export { selectFromPokemonV2EgggroupStddevSampFields, pokemonV2EgggroupStddevSampFieldsModelPrimitives, PokemonV2EgggroupStddevSampFieldsModelSelector } from "./PokemonV2EgggroupStddevSampFieldsModel.base"

/**
 * PokemonV2EgggroupStddevSampFieldsModel
 *
 * aggregate stddev_samp on columns
 */
export const PokemonV2EgggroupStddevSampFieldsModel = PokemonV2EgggroupStddevSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
