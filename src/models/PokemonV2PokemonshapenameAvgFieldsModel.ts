import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonshapenameAvgFieldsModelBase } from "./PokemonV2PokemonshapenameAvgFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonshapenameAvgFieldsModel */
export interface PokemonV2PokemonshapenameAvgFieldsModelType extends Instance<typeof PokemonV2PokemonshapenameAvgFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonshapenameAvgFieldsModel */
export { selectFromPokemonV2PokemonshapenameAvgFields, pokemonV2PokemonshapenameAvgFieldsModelPrimitives, PokemonV2PokemonshapenameAvgFieldsModelSelector } from "./PokemonV2PokemonshapenameAvgFieldsModel.base"

/**
 * PokemonV2PokemonshapenameAvgFieldsModel
 *
 * aggregate avg on columns
 */
export const PokemonV2PokemonshapenameAvgFieldsModel = PokemonV2PokemonshapenameAvgFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
