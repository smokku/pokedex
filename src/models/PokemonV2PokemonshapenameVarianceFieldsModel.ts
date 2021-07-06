import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonshapenameVarianceFieldsModelBase } from "./PokemonV2PokemonshapenameVarianceFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonshapenameVarianceFieldsModel */
export interface PokemonV2PokemonshapenameVarianceFieldsModelType extends Instance<typeof PokemonV2PokemonshapenameVarianceFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonshapenameVarianceFieldsModel */
export { selectFromPokemonV2PokemonshapenameVarianceFields, pokemonV2PokemonshapenameVarianceFieldsModelPrimitives, PokemonV2PokemonshapenameVarianceFieldsModelSelector } from "./PokemonV2PokemonshapenameVarianceFieldsModel.base"

/**
 * PokemonV2PokemonshapenameVarianceFieldsModel
 *
 * aggregate variance on columns
 */
export const PokemonV2PokemonshapenameVarianceFieldsModel = PokemonV2PokemonshapenameVarianceFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
