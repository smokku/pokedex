import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonegggroupStddevSampFieldsModelBase } from "./PokemonV2PokemonegggroupStddevSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonegggroupStddevSampFieldsModel */
export interface PokemonV2PokemonegggroupStddevSampFieldsModelType extends Instance<typeof PokemonV2PokemonegggroupStddevSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonegggroupStddevSampFieldsModel */
export { selectFromPokemonV2PokemonegggroupStddevSampFields, pokemonV2PokemonegggroupStddevSampFieldsModelPrimitives, PokemonV2PokemonegggroupStddevSampFieldsModelSelector } from "./PokemonV2PokemonegggroupStddevSampFieldsModel.base"

/**
 * PokemonV2PokemonegggroupStddevSampFieldsModel
 *
 * aggregate stddev_samp on columns
 */
export const PokemonV2PokemonegggroupStddevSampFieldsModel = PokemonV2PokemonegggroupStddevSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
