import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonshapenameStddevSampFieldsModelBase } from "./PokemonV2PokemonshapenameStddevSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonshapenameStddevSampFieldsModel */
export interface PokemonV2PokemonshapenameStddevSampFieldsModelType extends Instance<typeof PokemonV2PokemonshapenameStddevSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonshapenameStddevSampFieldsModel */
export { selectFromPokemonV2PokemonshapenameStddevSampFields, pokemonV2PokemonshapenameStddevSampFieldsModelPrimitives, PokemonV2PokemonshapenameStddevSampFieldsModelSelector } from "./PokemonV2PokemonshapenameStddevSampFieldsModel.base"

/**
 * PokemonV2PokemonshapenameStddevSampFieldsModel
 *
 * aggregate stddev_samp on columns
 */
export const PokemonV2PokemonshapenameStddevSampFieldsModel = PokemonV2PokemonshapenameStddevSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
