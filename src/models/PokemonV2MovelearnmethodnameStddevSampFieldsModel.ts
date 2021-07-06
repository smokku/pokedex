import { Instance } from "mobx-state-tree"
import { PokemonV2MovelearnmethodnameStddevSampFieldsModelBase } from "./PokemonV2MovelearnmethodnameStddevSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MovelearnmethodnameStddevSampFieldsModel */
export interface PokemonV2MovelearnmethodnameStddevSampFieldsModelType extends Instance<typeof PokemonV2MovelearnmethodnameStddevSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovelearnmethodnameStddevSampFieldsModel */
export { selectFromPokemonV2MovelearnmethodnameStddevSampFields, pokemonV2MovelearnmethodnameStddevSampFieldsModelPrimitives, PokemonV2MovelearnmethodnameStddevSampFieldsModelSelector } from "./PokemonV2MovelearnmethodnameStddevSampFieldsModel.base"

/**
 * PokemonV2MovelearnmethodnameStddevSampFieldsModel
 *
 * aggregate stddev_samp on columns
 */
export const PokemonV2MovelearnmethodnameStddevSampFieldsModel = PokemonV2MovelearnmethodnameStddevSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
