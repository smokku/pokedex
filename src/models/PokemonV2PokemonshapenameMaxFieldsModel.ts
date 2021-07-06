import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonshapenameMaxFieldsModelBase } from "./PokemonV2PokemonshapenameMaxFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonshapenameMaxFieldsModel */
export interface PokemonV2PokemonshapenameMaxFieldsModelType extends Instance<typeof PokemonV2PokemonshapenameMaxFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonshapenameMaxFieldsModel */
export { selectFromPokemonV2PokemonshapenameMaxFields, pokemonV2PokemonshapenameMaxFieldsModelPrimitives, PokemonV2PokemonshapenameMaxFieldsModelSelector } from "./PokemonV2PokemonshapenameMaxFieldsModel.base"

/**
 * PokemonV2PokemonshapenameMaxFieldsModel
 *
 * aggregate max on columns
 */
export const PokemonV2PokemonshapenameMaxFieldsModel = PokemonV2PokemonshapenameMaxFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
