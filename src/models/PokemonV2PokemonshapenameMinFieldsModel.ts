import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonshapenameMinFieldsModelBase } from "./PokemonV2PokemonshapenameMinFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonshapenameMinFieldsModel */
export interface PokemonV2PokemonshapenameMinFieldsModelType extends Instance<typeof PokemonV2PokemonshapenameMinFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonshapenameMinFieldsModel */
export { selectFromPokemonV2PokemonshapenameMinFields, pokemonV2PokemonshapenameMinFieldsModelPrimitives, PokemonV2PokemonshapenameMinFieldsModelSelector } from "./PokemonV2PokemonshapenameMinFieldsModel.base"

/**
 * PokemonV2PokemonshapenameMinFieldsModel
 *
 * aggregate min on columns
 */
export const PokemonV2PokemonshapenameMinFieldsModel = PokemonV2PokemonshapenameMinFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
