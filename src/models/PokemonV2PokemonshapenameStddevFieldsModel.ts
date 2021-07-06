import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonshapenameStddevFieldsModelBase } from "./PokemonV2PokemonshapenameStddevFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonshapenameStddevFieldsModel */
export interface PokemonV2PokemonshapenameStddevFieldsModelType extends Instance<typeof PokemonV2PokemonshapenameStddevFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonshapenameStddevFieldsModel */
export { selectFromPokemonV2PokemonshapenameStddevFields, pokemonV2PokemonshapenameStddevFieldsModelPrimitives, PokemonV2PokemonshapenameStddevFieldsModelSelector } from "./PokemonV2PokemonshapenameStddevFieldsModel.base"

/**
 * PokemonV2PokemonshapenameStddevFieldsModel
 *
 * aggregate stddev on columns
 */
export const PokemonV2PokemonshapenameStddevFieldsModel = PokemonV2PokemonshapenameStddevFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
