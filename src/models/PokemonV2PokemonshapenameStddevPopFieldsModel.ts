import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonshapenameStddevPopFieldsModelBase } from "./PokemonV2PokemonshapenameStddevPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonshapenameStddevPopFieldsModel */
export interface PokemonV2PokemonshapenameStddevPopFieldsModelType extends Instance<typeof PokemonV2PokemonshapenameStddevPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonshapenameStddevPopFieldsModel */
export { selectFromPokemonV2PokemonshapenameStddevPopFields, pokemonV2PokemonshapenameStddevPopFieldsModelPrimitives, PokemonV2PokemonshapenameStddevPopFieldsModelSelector } from "./PokemonV2PokemonshapenameStddevPopFieldsModel.base"

/**
 * PokemonV2PokemonshapenameStddevPopFieldsModel
 *
 * aggregate stddev_pop on columns
 */
export const PokemonV2PokemonshapenameStddevPopFieldsModel = PokemonV2PokemonshapenameStddevPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
