import { Instance } from "mobx-state-tree"
import { PokemonV2EgggroupnameStddevSampFieldsModelBase } from "./PokemonV2EgggroupnameStddevSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2EgggroupnameStddevSampFieldsModel */
export interface PokemonV2EgggroupnameStddevSampFieldsModelType extends Instance<typeof PokemonV2EgggroupnameStddevSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2EgggroupnameStddevSampFieldsModel */
export { selectFromPokemonV2EgggroupnameStddevSampFields, pokemonV2EgggroupnameStddevSampFieldsModelPrimitives, PokemonV2EgggroupnameStddevSampFieldsModelSelector } from "./PokemonV2EgggroupnameStddevSampFieldsModel.base"

/**
 * PokemonV2EgggroupnameStddevSampFieldsModel
 *
 * aggregate stddev_samp on columns
 */
export const PokemonV2EgggroupnameStddevSampFieldsModel = PokemonV2EgggroupnameStddevSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
